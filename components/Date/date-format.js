import {  format, formatISO, formatRFC3339, fromUnixTime, getISODay, parse, parseISO} from "date-fns";
import { parseISOWithOptions } from "date-fns/fp";
import { fromJSON } from "postcss";

export default function DateFormat({date}) {
    // console.log(format(date,'dd/mm/yyyy'));
    return(
        <div>
            <p className=" text-sm text-gray-400 mb-5">{format(date,'dd/mm/yyyy')}</p>
            {/* <p className=" text-sm text-gray-400 mb-5">{format(parseISO(date),'dd/mm/yyyy')}</p> */}
        </div>
    );
}