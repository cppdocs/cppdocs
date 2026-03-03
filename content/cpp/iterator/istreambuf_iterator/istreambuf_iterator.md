---
title: "std::istreambuf_iterator<CharT,Traits>::istreambuf_iterator"
source_path: "cpp/iterator/istreambuf_iterator/istreambuf_iterator"
category: "iterator"
since: "C++11"
---

1,2) Constructs an end-of-stream iterator.

## Declarations
```cpp
istreambuf_iterator() throw();
```
_(until C++11)_

```cpp
constexpr istreambuf_iterator() noexcept;
```
_(since C++11)_

```cpp
constexpr istreambuf_iterator( std::default_sentinel_t ) noexcept;
```
_(since C++20)_

```cpp
istreambuf_iterator( std::basic_istream<CharT,Traits>& is ) throw();
```
_(until C++11)_

```cpp
istreambuf_iterator( std::basic_istream<CharT,Traits>& is ) noexcept;
```
_(since C++11)_

```cpp
istreambuf_iterator( std::basic_streambuf<CharT,Traits>* s ) throw();
```
_(until C++11)_

```cpp
istreambuf_iterator( std::basic_streambuf<CharT,Traits>* s ) noexcept;
```
_(since C++11)_

```cpp
istreambuf_iterator( const /* proxy */& p ) throw();
```
_(until C++11)_

```cpp
istreambuf_iterator( const /* proxy */& p ) noexcept;
```
_(since C++11)_

```cpp
istreambuf_iterator( const istreambuf_iterator& ) noexcept = default;
```
_(since C++11)_

## Parameters
- `is`: stream to obtain the stream buffer from
- `s`: stream buffer to initialize the iterator with
- `p`: object of the implementation-defined proxy type
