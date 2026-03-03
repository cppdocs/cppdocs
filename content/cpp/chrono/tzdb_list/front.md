---
title: "std::chrono::tzdb_list::front"
source_path: "cpp/chrono/tzdb_list/front"
category: "chrono"
since: "C++20"
---

Obtains a reference to the first std::chrono::tzdb in the list. Simultaneous calls to this function and [std::chrono::reload_tzdb](/cpp/chrono/tzdb_functions/)() does not introduce a data race.

## Declarations
```cpp
const std::chrono::tzdb& front() const noexcept;
```
_(since C++20)_

## Return value
A reference to the first std::chrono::tzdb in the list.
