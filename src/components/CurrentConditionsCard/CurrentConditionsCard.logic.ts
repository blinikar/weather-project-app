import { CurrentConditionsCardProps } from "components/CurrentConditionsCard/CurrentConditionsCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { starredCitiesActions } from "store/StarredReducer";

export const useDayCardLogic = (props: CurrentConditionsCardProps) => ({
  useBackgroundImageUrl: (): [
    backgroundImageUrl: string,
    fontColor: string
  ] => {
    let backgroundImageUrl = "";
    let fontColor = "";

    switch (props.type) {
    case "sunny":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg";
      fontColor = "black";
      break;
    case "rainy":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/65/Hard_rain_on_a_roof.jpg";
      fontColor = "black";
      break;
    case "thunderstorm":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f5/The_thunder_and_lightning.jpg";
      fontColor = "black";
      break;
    case "cloudy":
      backgroundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Clouds_after_the_storm%2C_7th_Brigade_Park_Chermside_DSCF4709.jpg";
      fontColor = "black";
      break;
    }

    return [backgroundImageUrl, fontColor];
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
