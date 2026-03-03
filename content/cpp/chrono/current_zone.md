---
title: "std::chrono::current_zone"
source_path: "cpp/chrono/current_zone"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Convenience function for obtaining local time zone from the time zone database. Equivalent to [std::chrono::get_tzdb](/cpp/chrono/tzdb_functions/)().current_zone().

## Declarations
```cpp
const std::chrono::time_zone* current_zone();
```
_(since C++20)_

## Notes
A call to this function that is the first reference to the time zone database will cause it to be initialized.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main() {
    const std::chrono::zoned_time cur_time{ std::chrono::current_zone(),
                                            std::chrono::system_clock::now() };
    std::cout << cur_time << '\n';
}
```

## See also
- [current_zone](/cpp/chrono/tzdb/current_zone/)
- [get_tzdbget_tzdb_listreload_tzdbremote_version](/cpp/chrono/tzdb_functions/)
