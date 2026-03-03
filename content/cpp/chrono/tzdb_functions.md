---
title: "std::chrono::get_tzdb_list, std::chrono::get_tzdb, std::chrono::remote_version, std::chrono::reload_tzdb"
source_path: "cpp/chrono/tzdb_functions"
category: "chrono"
since: "C++20"
---

These functions provide access to the program-wide time zone database.

## Declarations
```cpp
std::chrono::tzdb_list& get_tzdb_list();
```
_(since C++20)_

```cpp
const std::chrono::tzdb& get_tzdb();
```
_(since C++20)_

```cpp
std::string remote_version();
```
_(since C++20)_

```cpp
const std::chrono::tzdb& reload_tzdb();
```
_(since C++20)_
