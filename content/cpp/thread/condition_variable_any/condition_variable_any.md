---
title: "std::condition_variable_any::condition_variable_any"
source_path: "cpp/thread/condition_variable_any/condition_variable_any"
category: "thread"
since: "C++11"
---

1) Constructs an object of type std::condition_variable_any.

## Declarations
```cpp
condition_variable_any();
```
_(since C++11)_

```cpp
condition_variable_any( const condition_variable_any& ) = delete;
```
_(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2092 | C++11 | the error condition for resource_unavailable_try_again was wrong | corrected |

## See also
- [C documentation](/c/thread/cnd_init/)
