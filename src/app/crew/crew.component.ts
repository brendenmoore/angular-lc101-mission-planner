import { Component, OnInit } from "@angular/core";
import { crewMember } from "./crewMember";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  crew: crewMember[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true },
  ];

  selectedMember: crewMember;

  constructor() {}

  ngOnInit() {}

  add(memberName: string, isFirst: boolean) {
    this.crew.push({ name: memberName, firstMission: isFirst });
  }
  remove(member: crewMember) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
}
