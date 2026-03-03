---
title: "std::atomic_init"
source_path: "cpp/atomic/atomic_init"
header: "<atomic>"
category: "atomic"
---

Initializes the default-constructed atomic object obj with the value desired. The function is not atomic: concurrent access from another thread, even through an atomic operation, is a data race.

## Declarations
```cpp
template< class T >
void atomic_init
( std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11) (deprecated in C++20)_

```cpp
template< class T >
void atomic_init
( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11) (deprecated in C++20)_

## Parameters
- `obj`: pointer to an atomic object to initialize
- `desired`: the value to initialize atomic object with

## Return value
(none)

## Notes
This function is provided for compatibility with C. If the compatibility is not required, [std::atomic](/cpp/atomic/atomic/) may be initialized through their non-default constructors.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [ATOMIC_VAR_INIT](/cpp/atomic/atomic_var_init/)
- [(constructor)](/cpp/atomic/atomic/atomic/)
- [C documentation](/c/atomic/atomic_init/)
