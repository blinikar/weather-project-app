import { CurrentConditionsCardProps } from "components/CurrentConditionsCard/CurrentConditionsCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { starredCitiesActions } from "store/StarredReducer";

export const useDayCardLogic = (props: CurrentConditionsCardProps) => ({
  useBackgroundImageUrl: (): [
    backgroundImageUrl: string,
    fontColor: string,
    starFilter: string
  ] => {
    let backgroundImageUrl = "";
    let fontColor = "";

    switch (props.type) {
    case "Clear":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg";
      fontColor = "black";
      break;
    case "Rain":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/65/Hard_rain_on_a_roof.jpg";
      fontColor = "black";
      break;
    case "Thunderstorm":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f5/The_thunder_and_lightning.jpg";
      fontColor = "black";
      break;
    case "Clouds":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Clouds_after_the_storm%2C_7th_Brigade_Park_Chermside_DSCF4709.jpg";
      fontColor = "white";
      break;
    case "Snow":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/72/Snow_Scene_at_Shipka_Pass_1.JPG";
      fontColor = "black  ";
      break;
    }

    let starFilter = "";
    switch (fontColor) {
    case "white":
      starFilter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(11deg) brightness(101%) contrast(102%)";
      break;
    case "black":
      starFilter = "";
      break;
    }

    return [backgroundImageUrl, fontColor, starFilter];
  },
  useStarredCities: (): [isStarred: boolean, onClick: () => void] => {
    const [isStarred, setIsStarred] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const starredCities = useAppSelector((state) => state.starredCities);

    const onClick = () => {
      dispatch(starredCitiesActions.toggleCity(props.city));
    };

    useEffect(() => {
      setIsStarred(starredCities.includes(props.city));
    }, [starredCities]);

    return [isStarred, onClick];
  },
});
