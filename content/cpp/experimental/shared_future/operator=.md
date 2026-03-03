---
title: "std::experimental::shared_future<T>::operator="
source_path: "cpp/experimental/shared_future/operator"
category: "experimental"
---

Assigns the contents of another std::experimental::shared_future object.

## Declarations
```cpp
std::experimental::shared_future<T>& operator=( const std::experimental::shared_future<T>& other );
```

```cpp
std::experimental::shared_future<T>& operator=( std::experimental::shared_future<T>&& other ) noexcept;
```

## Parameters
- `other`: a std::experimental::shared_future object to assign from

## Return value
*this
