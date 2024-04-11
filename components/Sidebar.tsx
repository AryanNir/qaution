import { MoreVertical, ChevronLast, ChevronFirst, AlignRight } from "lucide-react";
import Link from "next/link";
import { useContext, createContext, useState, ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <aside className={`h-screen w-52 fixed left-0 top-0 bg-black z-50 overflow-y-auto transition-all ${expanded ? 'translate-x-0' : '-translate-x-52'}`}>
      <nav className="h-full flex flex-col  shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/favicon.ico"
            className={`overflow-hidden transition-all ${
              expanded ? "w-20" : "w-0"
            }`}
            alt=""
          />
          {/* <div>
          <h4 className="flex text-3xl font-semibold text-gradient_blue-purple">QT</h4>
          </div> */}
          <button
            onClick={() => setExpanded((curr) => false)}
            className="p-1.5 rounded-lg"
          >
            {expanded ? <ChevronFirst size={28} color="#fdfcfc" /> : <ChevronFirst size={28} color="#fdfcfc" />}
          </button>
        </div>
        <br></br>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className=" flex p-3">
          {/* <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          /> */}
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white-800">User</h4>
              <span className="text-xs text-white-800">user@email.com</span>
            </div>
            {/* <MoreVertical size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
