---
title: "std::filesystem::directory_iterator::directory_iterator"
source_path: "cpp/filesystem/directory_iterator/directory_iterator"
category: "filesystem"
since: "C++17"
---

Constructs a new directory iterator.

## Declarations
```cpp
directory_iterator() noexcept;
```
_(since C++17)_

```cpp
explicit directory_iterator( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
directory_iterator( const std::filesystem::path& p,
std::filesystem::directory_options options );
```
_(since C++17)_

```cpp
directory_iterator( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

```cpp
directory_iterator( const std::filesystem::path& p,
std::filesystem::directory_options options,
std::error_code& ec );
```
_(since C++17)_

```cpp
directory_iterator( const directory_iterator& other ) = default;
```
_(since C++17)_

```cpp
directory_iterator( directory_iterator&& other ) = default;
```
_(since C++17)_

## Parameters
- `p`: path to the filesystem object to which the directory iterator will refer
- `ec`: out-parameter for error reporting in the non-throwing overloads
- `options`: the set of BitmaskType options that control the behavior of the directory iterator
- `other`: another directory iterator to use as source to initialize the directory iterator with

## Notes
To iterate over the current directory, construct the iterator as directory_iterator(".") instead of directory_iterator("").

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3013 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |
