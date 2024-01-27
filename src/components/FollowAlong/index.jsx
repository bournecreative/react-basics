import { useEffect, useState } from "react";
import { Alert } from "antd";

export const FollowAlong = ({ setMsg }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackCursor = (e) => {
    console.log(e.clientX, e.clientY);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    setMsg("FollowAlong component mounted. Mousemove event listener added!");
    window.addEventListener("mousemove", trackCursor);

    return () => {
      setMsg(
        "FollowAlong component un-mounted!! Remove any event listeners added."
      );
      window.removeEventListener("mousemove", trackCursor);
    };
  }, []);

  return (
    <div>
      <Alert
        style={{ display: "inline-block" }}
        message="We now have a red dot tracking your cursor based on mousemove."
        type="success"
      />
      <div
        className="follow-along"
        style={{
          position: "absolute",
          borderRadius: "50%",
          background: "red",
          width: "10px",
          height: "10px",
          top: position.y + 20 + "px",
          left: position.x + 20 + "px",
        }}
      ></div>
    </div>
  );
};
