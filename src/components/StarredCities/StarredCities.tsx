import React from "react";
import styles from "components/StarredCities/StarredCities.module.scss";
import { useStarredCitiesLogic } from "components/StarredCities/StarredCities.logic";
import { StarredCity } from "components/StarredCities/StarredCity/StarredCity";
import { useAppDispatch, useAppSelector } from "store";
import { starredCitiesActions } from "store/StarredReducer";

export interface StarredCitiesProps {}

export const StarredCities: React.FunctionComponent<StarredCitiesProps> = (
  props,
) => {
  const logic = useStarredCitiesLogic(props);

  const cities = useAppSelector((state) => state.starredCities);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["starred-cities"]}>
      {cities.map((e, i) => (
        <StarredCity
          name={e.name}
          link={e.link}
          key={i}
          onRemoveClick={() => {
            dispatch(starredCitiesActions.toggleCity(e));
          }}
        />
      ))}
    </div>
  );
};
