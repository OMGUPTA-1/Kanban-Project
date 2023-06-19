import React from "react";
import Category from "../../Icons/Category";
import MessageEllipsis from "../../Icons/MessageEllipsis";
import Task from "../../Icons/Task";
import Profile from "../../Icons/Profile";
import Setting from "../../Icons/Setting";
import Lamp from "../../Icons/Lamp";
import Add from "../../Icons/Add";
import Close from "../../Icons/Close";
import styled from "styled-components";
import More from "../../Icons/More";

const routes = [
  {
    title: "Home",
    Icon: Category,
  },
  {
    title: "Messages",
    Icon: MessageEllipsis,
  },
  {
    title: "Tasks",
    Icon: Task,
  },
  {
    title: "Members",
    Icon: Profile,
  },
  {
    title: "Settings",
    Icon: Setting,
  },
];

const projects = [
  {
    title: "Mobile App",
    color: "bg-misc-1",
    active: true,
  },
  {
    title: "Website Redesign",
    color: "bg-misc-2",
    active: false,
  },
  {
    title: "Design System",
    color: "bg-misc-3",
    active: false,
  },
  {
    title: "Wireframes",
    color: "bg-misc-4",
    active: false,
  },
];

const LampContainer = styled.div`
  top: -33px;
`;

const Sidebar = (props) => {
  return (
    <div {...props} className={`${props.className} px-3`}>
      {/* Routes */}
      <div className="flex flex-col gap-6 py-8">
        {routes.map(({ title, Icon }, index) => (
          <div key={index} className="flex flex-row px-6 gap-3">
            <Icon />
            <span className="text-font-light text-base font-medium">
              {title}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full bg-main-divider h-px" />

      {/* Projects */}
      <div className="pt-8">
        <div className="flex flex-row items-center justify-between px-5">
          <h1 className="uppercase font-bold text-xs text-font-light">
            My Projects
          </h1>
          <Add width="18" height="18" />
        </div>
        <div className="px-3 mt-5 flex flex-col gap-2">
          {projects.map(({ title, color, active }, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-between px-3 py-3 rounded-md ${
                active ? "bg-surface-selected" : null
              }`}
            >
              <div className="flex flex-row items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${color}`} />
                <span
                  className={`text-base ${
                    active
                      ? "text-font-primary font-semibold"
                      : "text-font-light font-medium"
                  }`}
                >
                  {title}
                </span>
              </div>
              {active && <More />}
            </div>
          ))}
        </div>
      </div>

      {/* Thought */}
      <div className="mt-12 px-2 mb-8">
        <div className="rounded-2xl bg-surface-card px-5 pt-9 pb-5 flex flex-col items-center relative">
          <LampContainer className="p-4 rounded-full absolute bg-surface-card">
            <div className="relative">
              <Lamp
                className="absolute top-1/2 left-1/2 fill-font-primary"
                style={{
                  transform: "translate(-50%,-50%)",
                }}
              />
              <div className="w-8 h-8 bg-surface-thought-icon blur-lg	rounded-full" />
            </div>
          </LampContainer>
          <p className="font-medium text-sm text-center">Thoughts Time</p>
          <p className="font-normal text-xs text-center text-font-light my-3">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="px-7 py-3 bg-white rounded-md">
            <p className="font-normal text-xs text-center">Write a message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
