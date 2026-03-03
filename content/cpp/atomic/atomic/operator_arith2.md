---
title: "std::atomic<T>::operator+=,-="
source_path: "cpp/atomic/atomic/operator"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with the result of computation involving the previous value and arg. The operation is read-modify-write operation.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializationsand atomic<Floating ﻿> specializations(since C++20)
```

```cpp
T operator+=( T arg ) noexcept;
```
_(since C++11)_

```cpp
T operator+=( T arg ) volatile noexcept;
```
_(since C++11)_

```cpp
T operator-=( T arg ) noexcept;
```
_(since C++11)_

```cpp
T operator-=( T arg ) volatile noexcept;
```
_(since C++11)_

```cpp
member only of atomic<T*> partial specialization
```

```cpp
T* operator+=( std::ptrdiff_t arg ) noexcept;
```
_(since C++11)_

```cpp
T* operator+=( std::ptrdiff_t arg ) volatile noexcept;
```
_(since C++11)_

```cpp
T* operator-=( std::ptrdiff_t arg ) noexcept;
```
_(since C++11)_

```cpp
T* operator-=( std::ptrdiff_t arg ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `arg`: the argument for the arithmetic operation

## Return value
The resulting value (that is, the result of applying the corresponding binary operator to the value immediately preceding the effects of the corresponding member function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this).

## Notes
Unlike most compound assignment operators, the compound assignment operators for atomic types do not return a reference to their left-hand arguments. They return a copy of the stored value instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | arithmetic permitted on pointers to (possibly cv-qualified) void or function | made ill-formed |

## See also
- [fetch_add](/cpp/atomic/atomic/fetch_add/)
- [fetch_sub](/cpp/atomic/atomic/fetch_sub/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic/operator_arith/)
- [operator&=operator|=operator^=](/cpp/atomic/atomic/operator_arith3/)
