---
title: "std::stop_callback<Callback>::stop_callback"
source_path: "cpp/thread/stop_callback/stop_callback"
category: "thread"
since: "C++20"
---

Constructs a new stop_callback object, saving and registering the cb callback function into the given [std::stop_token](/cpp/thread/stop_token/)'s associated stop-state, for later invocation if stop is requested on the associated [std::stop_source](/cpp/thread/stop_source/).

## Declarations
```cpp
template< class C >
explicit stop_callback( const std::stop_token& st, C&& cb ) noexcept(/*see below*/);
```
_(since C++20)_

```cpp
template< class C >
explicit stop_callback( std::stop_token&& st, C&& cb ) noexcept(/*see below*/);
```
_(since C++20)_

```cpp
stop_callback( const stop_callback& ) = delete;
```
_(since C++20)_

```cpp
stop_callback( stop_callback&& ) = delete;
```
_(since C++20)_

## Parameters
- `st`: a std::stop_token object to register this stop_callback object with
- `cb`: the type to invoke if stop is requested

## Notes
If st.stop_requested() == true for the passed-in [std::stop_token](/cpp/thread/stop_token/), then the callback function is invoked in the current thread before the constructor returns.
