import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  if (total === 0) {
    return <p>No feedback given yet.</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={`${positivePercentage}%`} />
    </div>
  );
};

export default Statistics;
