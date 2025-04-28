export default function Header() {
  return (
    <div className="mx-8 flex items-center justify-between py-2">
      {/* Left */}
      <div className=" w-[258px] rounded-full bg-gray-200">
        <label
          className="input input-sm input-ghost flex items-center justify-between"
          aria-label="Tìm kiếm"
        >
          <svg
            className="mr-3 h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input type="search" className=" grow" placeholder="Tìm kiếm" />
        </label>
      </div>

      {/* Center */}
      <div className="flex items-center space-x-4">
        <button className="btn btn-ghost">
          <i className="fas fa-home text-xl" />
        </button>
        <button className="btn btn-ghost">
          <i className="fas fa-user-friends text-xl" />
        </button>
      </div>

      {/* Right */}
      {/* Profile */}
      <div className="flex items-center space-x-2">
        <button className="btn btn-ghost">
          <i className="fas fa-comment-dots  text-xl" />
        </button>
        <button className="btn btn-ghost">
          <i className="fas fa-bell text-xl" />
        </button>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              alt="profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
