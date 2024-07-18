import React, { useState } from "react";
import lz from "lzutf8";
import copy from "copy-to-clipboard";
import { useEditor } from "@craftjs/core";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import { BiUndo, BiRedo } from "react-icons/bi";
import { AlmabaseLogo } from "../../../assets";
import { Modal } from "../../../utils";

const Topbar = () => {
  const { actions, query, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: state.options.enabled && query.history.canUndo(),
    canRedo: state.options.enabled && query.history.canRedo(),
  }));

  const [toggle, setToggle] = useState(false);
  const [copyValue, setCopyValue] = useState(false);
  const [stateToLoad, setStateToLoad] = useState(null);

  const handleSaveCopy = () => {
    setCopyValue((prev) => !prev);
    const json = query.serialize();
    copy(lz.encodeBase64(lz.compress(json)));
    setTimeout(() => setCopyValue((prev) => !prev), 3000);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleLoad = () => {
    handleToggle();
    const json = lz.decompress(lz.decodeBase64(stateToLoad));
    actions.deserialize(json);
    setStateToLoad(null);
  };

  const handleUndo = () => {
    if (canUndo) {
      actions.history.undo();
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      actions.history.redo();
    }
  };

  return (
    <div className="w-full border-b flex shadow-sm">
      <div className="logo p-4 lg:border-r">
        <img src={AlmabaseLogo} alt="almalogo" className="w-7 h-7" />
      </div>

      <div className="px-4 flex-1 flex items-center">
        <div className="font-medium gap-2 items-center lg:flex hidden">
          {/* Undo button */}
          <button
            onClick={handleUndo}
            disabled={!canUndo}
            className="p-2 text-xs font-medium bg-transparent border border-gray-900 rounded flex gap-1 items-center disabled:border-gray-300 disabled:text-gray-300"
          >
            <BiUndo className="w-3" />
          </button>

          {/* Redo button */}
          <button
            onClick={handleRedo}
            disabled={!canRedo}
            className="p-2 text-xs font-medium bg-transparent border  border-gray-900 rounded flex gap-1 items-center disabled:border-gray-300 disabled:text-gray-300"
          >
            <BiRedo className="w-3" />
          </button>
        </div>

        <div className="button ml-auto font-medium flex gap-2">
          {/* Export button */}
          <button
            onClick={handleSaveCopy}
            className="py-2 px-5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded flex gap-1 items-center"
          >
            {copyValue ? (
              <>
                <AiOutlineCheckCircle className="w-3 text-green-600" />{" "}
                <span className="text-green-600">Copied</span>
              </>
            ) : (
              <>
                <AiOutlineArrowUp className="w-3" /> <span>Export</span>
              </>
            )}
          </button>

          {/* Load button */}
          <button
            onClick={handleToggle}
            className="py-2 px-5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded flex gap-1 items-center"
          >
            <AiOutlineArrowDown className="w-3" /> <span>Load</span>
          </button>

          {/* Load State modal */}
          <Modal isOpen={toggle} onClose={handleToggle}>
            <div className="sm:w-96 w-72 sm:mx-auto">
              <div className="">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-semibold uppercase">
                    Load State
                  </div>
                  <AiOutlineClose
                    onClick={handleToggle}
                    className="w-4 cursor-pointer hover:text-red-500"
                  />
                </div>
              </div>
              <form className="flex flex-col gap-1">
                <div>
                  <textarea
                    value={stateToLoad}
                    onChange={(e) => setStateToLoad(e.target.value)}
                    name="load"
                    id="load"
                    rows="5"
                    className="w-full p-2 bg-gray-100 outline-none text-xs rounded-md"
                  ></textarea>
                </div>

                <div className="flex gap-2 items-center mt-1">
                  
                  <div
                    onClick={handleLoad}
                    className="cursor-pointer transition duration-300  flex-1 py-2 px-5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded flex gap-1 items-center justify-center"
                  >
                    Load
                  </div>

                  <div
                    className="transition duration-300 cursor-pointer  flex-1 py-2 px-5 text-xs font-medium border border-black text-black hover:border-red-600 hover:text-red-600 rounded flex gap-1 items-center justify-center"
                    onClick={handleToggle}
                  >
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
