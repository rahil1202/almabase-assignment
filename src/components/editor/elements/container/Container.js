import React, { useState } from "react";
import { useEditor, useNode } from "@craftjs/core";
import { ColorField, RichtextField, MarginField } from "../../../form-elements";
import { SettingsPanel } from "../../layout";
import { Modal } from "../../../../utils";

export const Container = ({
  width,
  height,
  backgroundColor,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  children,
}) => {
  const [toggle, setToggle] = useState(false);

  const {
    connectors: { connect, drag },
    isSelected,
    id,
  } = useNode((node) => ({
    isSelected: node.events.selected,
  }));

  const { actions } = useEditor((state, query, mutation) => ({
    actions: mutation,
  }));

  const handleToggle = (e) => {
    if (e.key === "Enter") {
      setToggle((prev) => !prev);
    } else if (e.key === "Delete" && isSelected) {
      actions.delete(id);
    }
  };

  const handleToggleCLick = (e) => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div
        id={id}
        className={`outline-red-500 ${
          isSelected ? "border-2 border-red-600" : "border-2 border-transparent"
        }`}
        ref={(ref) => connect(drag(ref))}
        style={{
          width,
          height,
          padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
          margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
          backgroundColor,
        }}
        onKeyDown={handleToggle}
        tabIndex={0}
      >
        {children}
      </div>

      <Modal isOpen={toggle} onClose={handleToggleCLick}>
        <div className="w-96 mx-auto">
          <SettingsPanel handleClose={handleToggleCLick} />
        </div>
      </Modal>
    </>
  );
};

const ContainerSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <>
      <form className="flex flex-col gap-1">
        <RichtextField
          title="Width"
          value={props.width}
          setValue={(e) => setProp((props) => (props.width = e.target.value))}
        />
        <RichtextField
          title="Height"
          value={props.height}
          setValue={(e) => setProp((props) => (props.height = e.target.value))}
        />
        <ColorField
          className="flex-1"
          title="Background color"
          value={props.backgroundColor}
          setValue={(e) =>
            setProp((props) => (props.backgroundColor = e.target.value))
          }
        />
        <MarginField
          title="Margin"
          value={{
            top: props.marginTop,
            bottom: props.marginBottom,
            left: props.marginLeft,
            right: props.marginRight,
          }}
          setBottom={(e) =>
            setProp((props) => (props.marginBottom = e.target.value))
          }
          setTop={(e) => setProp((props) => (props.marginTop = e.target.value))}
          setLeft={(e) =>
            setProp((props) => (props.marginLeft = e.target.value))
          }
          setRight={(e) =>
            setProp((props) => (props.marginRight = e.target.value))
          }
        />
        <MarginField
          title="Padding"
          value={{
            top: props.paddingTop,
            bottom: props.paddingBottom,
            left: props.paddingLeft,
            right: props.paddingRight,
          }}
          setBottom={(e) =>
            setProp((props) => (props.paddingBottom = e.target.value))
          }
          setTop={(e) =>
            setProp((props) => (props.paddingTop = e.target.value))
          }
          setLeft={(e) =>
            setProp((props) => (props.paddingLeft = e.target.value))
          }
          setRight={(e) =>
            setProp((props) => (props.paddingRight = e.target.value))
          }
        />
      </form>
    </>
  );
};

Container.craft = {
  displayName: "Container",
  props: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  related: {
    settings: ContainerSettings,
  },
};
