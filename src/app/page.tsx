import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <div className="">
      <div className="nav w-full bg-white p-2 h-[10dvh]">
        <div className="icons text-slate-600 flex flex-row justify-center gap-4 my-3">
          <button className="flex flex-col items-center hover:cursor-pointer">
            <GrUndo />
            <p>Undo</p>
          </button>
          <button className="flex flex-col items-center hover:cursor-pointer">
            <GrRedo />
            <p>Redo</p>
          </button>
        </div>

      </div>


      <div className="bg-slate-100 h-[80dvh] py-2 px-5" id="lowerbase">
        <div className=" bg-slate-200 h-[90%] rounded-md"  id="canvas">
          

        </div>

<div className="" id="optionmenu">
  <div className="">
  <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


  </div>
</div>


      </div>
    </div>
  );
}
