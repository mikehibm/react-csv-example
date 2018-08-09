import * as React from 'react';
import * as moment from 'moment';
import { WorkItem } from './WorkItem';
import './Report.css';

interface Props {
  items: WorkItem[];
}

export const Report = (props: Props) => {
  const totalHours = props.items.reduce<number>(
    (prev: number, cur: WorkItem) => prev + cur.duration,
    0
  );
  const startOfMonth = moment(props.items[0].startDate).startOf('month');
  const endOfMonth = moment(props.items[0].startDate).endOf('month');

  return (
    <div className="Report">
      <h4>
        {startOfMonth.format('YYYY-MM-DD')} ~ {endOfMonth.format('YYYY-MM-DD')}
      </h4>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((i, index) => (
            <tr key={index}>
              <td className="description">
                <span className="project">{i.project}</span>
                <br />
                {i.description}
              </td>
              <td>{moment(i.startDate).format('MM/DD')}</td>
              <td className="start_time">
                {moment(i.startDate).format('HH:mm')}~{moment(i.endDate).format('HH:mm')}
              </td>
              <td className="number">{i.duration.toFixed(2)}h</td>
            </tr>
          ))}
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <th>Total</th>
            <th className="number">{totalHours.toFixed(2)}h</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
