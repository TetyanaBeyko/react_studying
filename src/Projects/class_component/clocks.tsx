import React from "react";

class Clock extends React.Component<NonNullable<unknown>, { date: Date }> {
  timerID: number | undefined;
  constructor(props: Date) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  FormattedDate({
    date,
    locals,
    country,
  }: {
    date: Date;
    locals: string;
    country: string;
  }) {
    return (
      <h2>
        {country} - {date.toLocaleTimeString(locals)}.
      </h2>
    );
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <this.FormattedDate
          date={this.state.date}
          locals="en-us"
          country="USA"
        />

        <this.FormattedDate
          date={this.state.date}
          locals="en-gb"
          country="Great Britain"
        />
      </div>
    );
  }
}

export default Clock;
