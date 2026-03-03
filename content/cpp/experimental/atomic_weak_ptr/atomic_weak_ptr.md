---
title: "std::experimental::atomic_weak_ptr<T>::atomic_weak_ptr"
source_path: "cpp/experimental/atomic_weak_ptr/atomic_weak_ptr"
category: "experimental"
---

Constructs a new atomic_weak_ptr object.

## Declarations
```cpp
constexpr atomic_weak_ptr() noexcept;
```

```cpp
constexpr atomic_weak_ptr( weak_ptr<T> desired ) noexcept;
```

```cpp
atomic_weak_ptr( const atomic_weak_ptr& ) = delete;
```

## Parameters
- `desired`: value to initialize with
