import React from "react";
import RecentPost from "../RecentPost/RecentPost";
import Social from "../Social/Social";
import TagCloud from "../TagCloud/TagCloud";

function RightNav() {
  return (
    <section>
      <RecentPost title="Recent Post" />
      <TagCloud />
      <Social />
    </section>
  );
}

export default RightNav;
