---
title: "std::error_code::error_code"
source_path: "cpp/error/error_code/error_code"
category: "error"
since: "C++11"
---

Constructs new error code.

## Declarations
```cpp
error_code() noexcept;
```
_(since C++11)_

```cpp
error_code( int ec, const error_category& ecat ) noexcept;
```
_(since C++11)_

```cpp
template< class ErrorCodeEnum >
error_code( ErrorCodeEnum e ) noexcept;
```
_(since C++11)_

```cpp
error_code( const error_code& other ) = default;
```
_(since C++11) (implicitly declared)_

```cpp
error_code( error_code&& other ) = default;
```
_(since C++11) (implicitly declared)_

## Parameters
- `other`: another error code to initialize with
- `ec`: platform dependent error code to construct with
- `ecat`: error category corresponding to ec
- `e`: error code enum to construct with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3629 | C++11 | only std::make_error_code overloads were used | ADL-found overloads are used |

## See also
- [make_error_code(std::errc)](/cpp/error/errc/make_error_code/)
- [make_error_code(std::io_errc)](/cpp/io/io_errc/make_error_code/)
- [make_error_code(std::future_errc)](/cpp/thread/future_errc/make_error_code/)
