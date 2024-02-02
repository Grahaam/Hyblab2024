import { Sequence } from "remotion";
import { Frame1 } from "./Frame1";
import { Frame2 } from "./Frame2";
import { Frame3 } from "./Frame3";
import { Frame4 } from "./Frame4";
import athleteData from '../data/Athlete.json';
import { Athlete, EventDataItem} from '../components/type';
import EventData from '../data/Event.json';
interface MyVideoProps {
  id: string;
}
export const MyVideo: React.FC<MyVideoProps> = ({ id }) => {
  const allEventsData: EventDataItem[] = (EventData.Event.flat() as EventDataItem[]);

  let eventData = allEventsData.find(e => e.IdEvent == Number(id));
  const allAthletesData = athleteData.Athlete.reduce((allAthletes: Athlete[], athletesArray: Athlete[]) => {
      return allAthletes.concat(athletesArray);
    }, []);
  let athlete = allAthletesData.find(a => a.Athlete == eventData?.Athlete)
  if(athlete == undefined || eventData == undefined) {
    return (<></>);
  }
  return (
    <>
      <Sequence from={0} durationInFrames={120}>
        <Frame1 text={athlete.Athlete} titre={eventData.Gain} sous_titre="VTT cross country"></Frame1>
      </Sequence>
      <Sequence from={120} durationInFrames={120}>
        <Frame2></Frame2>
      </Sequence>
      <Sequence from={240} durationInFrames={120}>
        <Frame3 text="Nom de l'athlète"></Frame3>
      </Sequence>
      <Sequence from={360}>
        <Frame4 text="t"></Frame4>
      </Sequence>
    </>
  );
};