---
title: "std::istreambuf_iterator<CharT,Traits>::operator++, operator++(int)"
source_path: "cpp/iterator/istreambuf_iterator/operator"
category: "iterator"
---

Advances the iterator by calling sbuf_->sbumpc() where sbuf_ is the stored pointer to the stream buffer.

## Declarations
```cpp
istreambuf_iterator& operator++();
```

```cpp
/* proxy */ operator++( int );
```
