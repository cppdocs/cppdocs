---
title: "std::shared_future<T>::get"
source_path: "cpp/thread/shared_future/get"
category: "thread"
since: "C++11"
---

The get member function waits (by calling [wait()](/cpp/thread/shared_future/wait/)) until the shared state is ready, then retrieves the value stored in the shared state (if any).

## Declarations
```cpp
Main template
```

```cpp
const T& get() const;
```
_(since C++11)_

```cpp
std::shared_future<T&> specializations
```

```cpp
T& get() const;
```
_(since C++11)_

```cpp
std::shared_future<void> specialization
```

```cpp
void get() const;
```
_(since C++11)_

## Notes
The C++ standard recommends the implementations to detect the case when [valid()](/cpp/thread/shared_future/valid/) is false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [std::future_errc::no_state](/cpp/thread/future_errc/).

## Example
This section is incompleteReason: no example

## See also
- [valid](/cpp/thread/shared_future/valid/)
