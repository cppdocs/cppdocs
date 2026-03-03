---
title: "Multi-threaded executions and data races (since C++11)"
source_path: "cpp/language/multithread"
category: "language"
since: "C++11"
---

A thread of execution is a flow of control within a program that begins with the invocation of a specific top-level function (by [std::thread](/cpp/thread/thread/), [std::async](/cpp/thread/async/), [std::jthread](/cpp/thread/jthread/)(since C++20) or other means), and recursively including every function invocation subsequently executed by the thread.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1953 | C++11 | two expression evaluations that start/end the lifetimesof objects with overlapping storages did not conflict | they conflict |
| LWG 2200 | C++11 | it was unclear whether the container data racerequirement only applies to sequence containers | applies to all containers |
| P2809R3 | C++11 | the behavior of executing “trivial”[1]infinite loops was undefined | properly defines “trivial infinite loops”and made the behavior well-defined |
