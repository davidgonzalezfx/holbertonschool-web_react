import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("<Notifications />", () => {
  let listNotifications;
  let latestNotification;

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(1);
  });

  describe("Notifications with listNotifications", () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it("Notifications renders Notification Items and items have correct html", () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toBeDefined();
      expect(listItems).toHaveLength(3);
      expect(listItems.at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(listItems.at(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(listItems.at(2).html()).toEqual(
        `<li data-notification-type="urgent">${latestNotification}</li>`
      );
    });
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });

    it("Notifications renders Notification Item correct with empty listNotifications", () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);
      expect(listItems.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });

    it("Notifications renders Notification Item correct without listNotifications", () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);
      expect(listItems.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });

    it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
      const wrapper = shallow(<Notifications displayDrawer />);

      console.log = jest.fn();

      const instance = wrapper.instance();

      const id = 5;

      instance.markAsRead(id);

      expect(console.log).toHaveBeenCalledWith(
        `Notification ${id} has been marked as read`
      );
      jest.restoreAllMocks();
    });
  });
});
