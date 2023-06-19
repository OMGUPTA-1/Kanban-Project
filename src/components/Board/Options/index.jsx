import React, { useState } from "react";
import Button from "../../Button";
import Filter from "../../../Icons/Filter";
import Calendar from "../../../Icons/Calendar";
import Profile from "../../../Icons/Profile";
import Pause from "../../../Icons/Pause";
import Menu from "../../../Icons/Menu";

const Options = (props) => {
  const [viewOptions, setViewOptions] = useState([
    { Icon: Pause, active: true },
    { Icon: Menu, active: false },
  ]);

  const handleSelectView = (index) => {
    setViewOptions((prev) => {
      let temp = [...prev];
      temp = temp.map((opt, ind) => {
        opt.active = ind === index;
        return opt;
      });
      return temp;
    });
  };

  return (
    <div
      className={`${props.className} flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-0 justify-between`}
    >
      <div className="flex items-center flex-row gap-3">
        <Button dropdown icon={Filter}>
          Filter
        </Button>
        <Button dropdown icon={Calendar}>
          Today
        </Button>
      </div>

      <div className="flex flex-row items-center">
        <Button icon={Profile}>Share</Button>
        <div
          className="w-0 border border-font-light mx-5 my-2"
          style={{ height: 28 }}
        />
        <div className="flex flex-row items-center gap-2">
          {viewOptions.map(({ active, Icon }, index) => {
            return (
              <button
                key={index}
                style={{ padding: 10 }}
                onClick={() => handleSelectView(index)}
                className={`flex flex-row items-center justify-center rounded-md ${
                  active ? "bg-main-primary" : "bg-transparent"
                }`}
              >
                <Icon
                  fillClass={active ? "fill-white" : "fill-transprent"}
                  strokeClass={
                    active ? "stroke-transparent" : "stroke-font-light"
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Options;
