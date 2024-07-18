import React from "react";
import { Element, useEditor } from "@craftjs/core";
import ElementCard from "../../../utils/ElementCard";
import { Button, Container, Input, Label, Text } from "../elements";
import { Dropdown } from "../../../utils";

const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="sidebar h-full bg-white border-l lg:w-80 lg:block hidden flex-col">
      <div className="text-sm p-5 border-b">
        <h6 className="font-semibold">ELEMENTS</h6>
      </div>

      {/* Dropdown for BLOCKS category */}
      <Dropdown title={"BLOCKS"}>
        <div className="px-5 flex flex-col gap-2 pb-5 ">
          {/* Button element */}
          <div ref={(ref) => connectors.create(ref, <Button text="Button" />)}>
            <ElementCard title="Button" />
          </div>

          {/* Input element */}
          <div
            ref={(ref) =>
              connectors.create(ref, <Input text="" placeholder="Input" />)
            }
          >
            <ElementCard title="Input" />
          </div>

          {/* Label element */}
          <div ref={(ref) => connectors.create(ref, <Label text="Label" />)}>
            <ElementCard title="Label" />
          </div>

          {/* Text element */}
          <div ref={(ref) => connectors.create(ref, <Text text="Text" />)}>
            <ElementCard title="Text" />
          </div>

          {/* Container element */}
          <div
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} canvas data-cy={"container"} />
              )
            }
          >
            <ElementCard title="Container" />
          </div>
        </div>
      </Dropdown>

      {/* Additional note section (visible only on larger screens) */}
      <div className="p-5 lg:block hidden">
        <div className="bg-gray-100 text-gray-400 rounded-md p-3">
          <h6 className="text-xs font-semibold text-center ">NOTE</h6>
          <ul className="text-xs mt-3 flex gap-2 flex-col">
            <li>
              <span className=" font-medium">Select + Enter : </span> To open
              and close component style settings
            </li>{" "}
            <li>
              <span className=" font-medium">Select + Delete : </span> To delete
              selected component
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
