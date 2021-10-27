import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector,connect } from "react-redux";
import { getsubData } from "../actions/mainPageActions";
import CarouselComponent from "./carouselComponent/carousel";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'
const SubComponent = () => {
  const dispatch = useDispatch();

  const { subData } = useSelector((state) => state.rootState);
  const { value, id } = useParams();

  useEffect(() => {
    dispatch(getsubData(value, id));
  }, []);

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getsubData(value, id));
  }, [value, id]);

  return (
    <div className="subPage_container">
      <p className="display_name">{subData.name}</p>
      <hr/>
      {subData &&
        Object.keys(subData).map((item,index) => {
          return (
            Array.isArray(subData[item])&&subData[item]?.length>0&&subData[item][0]&& (
              <div key={index}>
               <p className="group_name">{item.toUpperCase()}</p>
                <CarouselComponent subDataItem={subData[item]} label={item} />
                <hr/>
                </div>
            )
          );
        })}
          <Link className="goToMainPage"
                  to={'/'}
                  variant="primary"
                  style={{ color: "#fff" }}
                >Go To Main Page</Link>
    </div>
  );
};
export default withRouter(SubComponent);
