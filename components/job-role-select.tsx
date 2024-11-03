"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const roles = [
  { value: "software-engineer-intern", label: "Software Engineer Intern" },
  { value: "devops-intern", label: "DevOps Intern" },
  { value: "qa-intern", label: "QA Engineer Intern" },
  { value: "ui-ux-intern", label: "UI/UX Designer Intern" },
  { value: "data-science-intern", label: "Data Science Intern" },
  { value: "software-engineer", label: "Software Engineer" },
  { value: "devops-engineer", label: "DevOps Engineer" },
  { value: "frontend-engineer", label: "Frontend Engineer" },
  { value: "backend-engineer", label: "Backend Engineer" },
  { value: "fullstack-engineer", label: "Full Stack Engineer" },
  { value: "mobile-engineer", label: "Mobile Engineer" },
  { value: "cloud-engineer", label: "Cloud Engineer" },
];

interface JobRoleSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function JobRoleSelect({ value, onChange }: JobRoleSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Job Role
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between hover:border-primary/50 transition-colors"
          >
            {value
              ? roles.find((role) => role.value === value)?.label
              : "Select job role..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search job role..." />
            <CommandEmpty>No job role found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="intern-header"
                disabled
                className="font-semibold text-primary"
              >
                Internships
              </CommandItem>
              {roles
                .filter((role) => role.value.includes("intern"))
                .map((role) => (
                  <CommandItem
                    key={role.value}
                    value={role.value}
                    onSelect={() => {
                      onChange(role.value);
                      setOpen(false);
                    }}
                    className="transition-colors hover:bg-primary/10"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 transition-transform",
                        value === role.value
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      )}
                    />
                    {role.label}
                  </CommandItem>
                ))}
              <CommandItem
                value="full-time-header"
                disabled
                className="font-semibold text-primary mt-2"
              >
                Full-Time Positions
              </CommandItem>
              {roles
                .filter((role) => !role.value.includes("intern"))
                .map((role) => (
                  <CommandItem
                    key={role.value}
                    value={role.value}
                    onSelect={() => {
                      onChange(role.value);
                      setOpen(false);
                    }}
                    className="transition-colors hover:bg-primary/10"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 transition-transform",
                        value === role.value
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      )}
                    />
                    {role.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
