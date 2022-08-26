const Details = () => {
  return (
    <div className="w-full h-screen bg-blue-500 relative ">
      <div className="w-12 h-screen bg-yellow-200 fixed"></div>
      <div className="w-48 h-[calc(100vh-4rem)] bottom-0 bg-green-200 absolute left-12 overflow-y-scroll">
        <span className="fixed text-2xl top-0 bg-red-500 h-16">hello</span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
          (data, i) => {
            return (
              <div className="w-full h-16 bg-red-300" key={i}>
                {data}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Details;
