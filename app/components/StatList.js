const StatList = ({ stats }) => {
  return (
    <section id="statistics" className="stats stats-vertical shadow">
      {stats.map((stat) => (
        <div key={stat.label} className="stat">
          <div className="stat-title">{stat.label}</div>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </section>
  );
};

export default StatList;
