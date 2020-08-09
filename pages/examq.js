import React, { Component } from "react";
import { useFetchUser } from "../lib/user";
import MediaGrid from "../components/ExamQPage_comps/MediaGrid";
import AddQuestion from "../components/ExamQPage_comps/AddQuestion";
//const { user, loading } = useFetchUser();
export default class examq extends Component {
  render() {
    return (
      <div>
        <AddQuestion />
        <MediaGrid />
      </div>
    );
  }
}
