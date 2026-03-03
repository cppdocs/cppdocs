---
title: "std::experimental::future<T>::operator="
source_path: "cpp/experimental/future/operator"
category: "experimental"
---

Assigns the contents of another future object.

## Declarations
```cpp
std::experimental::future<T>& operator=( std::experimental::future<T>&& other ) noexcept;
```

```cpp
std::experimental::future<T>& operator=( const std::experimental::future<T>& other ) = delete;
```

## Parameters
- `other`: a std::experimental::future that will transfer state to *this

## Return value
*this
