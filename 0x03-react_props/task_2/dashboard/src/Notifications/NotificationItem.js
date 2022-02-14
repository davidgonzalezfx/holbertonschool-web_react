import React from "react";

function NotificationItem({ type, value, html }) {
  let listItem;

  if (value) {
    listItem = <li data-notification-type={type}>{value}</li>;
  } else {
    listItem = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }

  return listItem;
}

export default NotificationItem;
