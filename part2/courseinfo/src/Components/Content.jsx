import {Part} from './index'

const Content = ({parts}) =>{
    return(
    <div>
      {parts.map((part, index)=><Part key={index} part={part}/>)}
    </div>
  );
}
export default Content;