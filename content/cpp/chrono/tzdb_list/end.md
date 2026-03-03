---
title: "std::chrono::tzdb_list::end, std::chrono::tzdb_list::cend"
source_path: "cpp/chrono/tzdb_list/end"
category: "chrono"
since: "C++20"
---

Returns the past-the-end iterator of the tzdb_list. Attempting to dereference this iterator results in undefined behavior.

## Declarations
```cpp
const_iterator end() const noexcept;
```
_(since C++20)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++20)_

## Return value
The past-the-end iterator.
