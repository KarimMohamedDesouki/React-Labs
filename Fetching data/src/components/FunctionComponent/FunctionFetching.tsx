import React, { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

const UserCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [users, setUsers] = useState([]);
  const {
    data: allUsers,
    loading,
    error,
  } = useFetch("https://dummyjson.com/users");

  useEffect(() => {
    if (Array.isArray(allUsers.users)) {
      let filteredUsers = allUsers.users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        const cityName = user.address.city.toLowerCase();
        return (
          fullName.includes(searchQuery.toLowerCase()) &&
          (selectedCity === "All" || cityName === selectedCity.toLowerCase())
        );
      });

      filteredUsers = filteredUsers.sort(() => Math.random() - 0.5);

      setUsers(filteredUsers.slice(0, 10));
    }
  }, [allUsers, searchQuery, selectedCity]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const uniqueCities = Array.isArray(allUsers.users)
    ? [...new Set(allUsers.users.map((user) => user.address.city))]
    : [];

  return (
    <div className="container mt-4">
      <h1 className="text-3xl font-bold mb-4">All User Cards</h1>
      <div className="form-inline mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mr-2"
        />
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="form-control"
        >
          <option value="All">All Cities</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
