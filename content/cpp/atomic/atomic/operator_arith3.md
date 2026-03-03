---
title: "std::atomic<T>::operator&=,|=,^="
source_path: "cpp/atomic/atomic/operator"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with the result of computation involving the previous value and arg. The operation is read-modify-write operation.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializations
```

```cpp
T operator&=( T arg ) noexcept;
```
_(since C++11)_

```cpp
T operator&=( T arg ) volatile noexcept;
```
_(since C++11)_

```cpp
T operator|=( T arg ) noexcept;
```
_(since C++11)_

```cpp
T operator|=( T arg ) volatile noexcept;
```
_(since C++11)_

```cpp
T operator^=( T arg ) noexcept;
```
_(since C++11)_

```cpp
T operator^=( T arg ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `arg`: the argument for the arithmetic operation

## Return value
The resulting value (that is, the result of applying the corresponding binary operator to the value immediately preceding the effects of the corresponding member function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this).

## Notes
Unlike most compound assignment operators, the compound assignment operators for atomic types do not return a reference to their left-hand arguments. They return a copy of the stored value instead.

## See also
- [fetch_and](/cpp/atomic/atomic/fetch_and/)
- [fetch_or](/cpp/atomic/atomic/fetch_or/)
- [fetch_xor](/cpp/atomic/atomic/fetch_xor/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic/operator_arith/)
- [operator+=operator-=](/cpp/atomic/atomic/operator_arith2/)
