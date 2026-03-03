---
title: "std::unique_lock<Mutex>::operator="
source_path: "cpp/thread/unique_lock/operator"
category: "thread"
since: "C++11"
---

Move assignment operator. Replaces the contents with those of other using move semantics.

## Declarations
```cpp
unique_lock& operator=( unique_lock&& other );
```
_(since C++11)_

## Parameters
- `other`: another unique_lock to replace the state with

## Return value
*this

## Notes
With a recursive mutex it is possible for both *this and other to own the same mutex before the assignment. In this case, *this will own the mutex after the assignment and other will not.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2104 | C++11 | the move assignment operator was noexcept, but it maythrow an exception in the case of undefined behavior[1] | it is not noexcept |
