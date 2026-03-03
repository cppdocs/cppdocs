---
title: "std::packaged_task<R(Args...)>::operator="
source_path: "cpp/thread/packaged_task/operator"
category: "thread"
since: "C++11"
---

1) Copy assignment operator is deleted, std::packaged_task is move-only.

## Declarations
```cpp
packaged_task& operator=( const packaged_task& ) = delete;
```
_(since C++11)_

```cpp
packaged_task& operator=( packaged_task&& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `rhs`: the std::packaged_task to move from

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2067 | C++11 | the parameter type of the copy assignment operator was packaged_task& | added const |
