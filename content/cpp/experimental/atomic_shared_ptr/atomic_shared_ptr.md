---
title: "std::experimental::atomic_shared_ptr<T>::atomic_shared_ptr"
source_path: "cpp/experimental/atomic_shared_ptr/atomic_shared_ptr"
category: "experimental"
---

Constructs a new atomic_shared_ptr object.

## Declarations
```cpp
constexpr atomic_shared_ptr() noexcept;
```

```cpp
constexpr atomic_shared_ptr( shared_ptr<T> desired ) noexcept;
```

```cpp
atomic_shared_ptr( const atomic_shared_ptr& ) = delete;
```

## Parameters
- `desired`: value to initialize with
