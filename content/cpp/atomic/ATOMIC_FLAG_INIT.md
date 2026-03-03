---
title: "ATOMIC_FLAG_INIT"
source_path: "cpp/atomic/ATOMIC_FLAG_INIT"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Defines the initializer which can be used to initialize [std::atomic_flag](/cpp/atomic/atomic_flag/) to clear (false) state in the form [std::atomic_flag](/cpp/atomic/atomic_flag/) v = ATOMIC_FLAG_INIT;. It is unspecified if it can be used with other initialization contexts.

## Declarations
```cpp
#define ATOMIC_FLAG_INIT /* implementation-defined */
```
_(since C++11)_

## Example
```cpp
#include <atomic>
 
std::atomic_flag static_flag = ATOMIC_FLAG_INIT; // static initialization,
// guaranteed to be available during dynamic initialization of static objects.
 
int main()
{
    std::atomic_flag automatic_flag = ATOMIC_FLAG_INIT; // guaranteed to work
//    std::atomic_flag another_flag(ATOMIC_FLAG_INIT); // unspecified
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2159 | C++11 | it was unclear whether ATOMIC_FLAG_INITcan be used with other initialization contexts | other usages arenot guaranteed |
| LWG 3659 | C++20 | ATOMIC_FLAG_INIT was deprecated, but needed in C on some platforms | it is undeprecated |

## See also
- [atomic_flag](/cpp/atomic/atomic_flag/)
- [C documentation](/c/atomic/ATOMIC_FLAG_INIT/)
