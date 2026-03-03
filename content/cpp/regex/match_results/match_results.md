---
title: "std::match_results<BidirIt,Alloc>::match_results"
source_path: "cpp/regex/match_results/match_results"
category: "regex"
---

1,2) Constructs a match result with no established result state.

## Declarations
```cpp
match_results() : match_results(Allocator()) {}
```

```cpp
explicit match_results( const Allocator& a );
```

```cpp
match_results( const match_results& rhs );
```

```cpp
match_results( const match_results& rhs, const Allocator& a );
```

```cpp
match_results( match_results&& rhs ) noexcept;
```

```cpp
match_results( match_results&& rhs, const Allocator& a );
```

## Parameters
- `a`: allocator to use for all memory allocations of this container
- `rhs`: another match_results to use as source to initialize the match_results with

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2191 | C++11 | n could be negative in the postconditions of overloads (3-6) | can only be non-negative |
| LWG 2195 | C++11 | the constructors required by AllocatorAwareContainer were missing | added |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
