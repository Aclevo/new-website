let StatList = ({ stats }) => {
  return (
    <section id="statistics" className="stats stats-vertical shadow">
      {stats.map((stat) => (
        <article key={stat.label}>
          <div className="stat">
            <div className="stat-title">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default StatList;
