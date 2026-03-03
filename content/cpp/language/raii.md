---
title: "RAII"
source_path: "cpp/language/raii"
category: "language"
---

Resource Acquisition Is Initialization or RAII, is a C++ programming technique[[1]](#cite_note-1)[[2]](#cite_note-2) which binds the life cycle of a resource that must be acquired before use (allocated heap memory, thread of execution, open socket, open file, locked mutex, disk space, database connection—anything that exists in limited supply) to the [lifetime](/cpp/language/lifetime/) of an object.

## Notes
RAII does not apply to the management of the resources that are not acquired before use: CPU time, core availability, cache capacity, entropy pool capacity, network bandwidth, electric power consumption, stack memory. For such resources, a C++ class constructor cannot guarantee resource availability for the duration of object lifetime, and other means of resource management have to be used.
