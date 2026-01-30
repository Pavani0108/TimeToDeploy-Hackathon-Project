import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MoreVertical,
  MapPin,
  Briefcase,
  Star,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/Tabs";


const candidates = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Cloud Engineer",
    location: "San Francisco, CA",
    experience: 8,
    skills: ["AWS", "Kubernetes", "Terraform", "Python"],
    status: "available",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?u=sarah",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "AI/ML Engineer",
    location: "New York, NY",
    experience: 6,
    skills: ["Python", "TensorFlow", "PyTorch"],
    status: "in-process",
    rating: 4.5,
    avatar: "https://i.pravatar.cc/150?u=michael",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Data Engineer",
    location: "Austin, TX",
    experience: 5,
    skills: ["Spark", "SQL", "Scala"],
    status: "deployed",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?u=emily",
    lastActive: "5 hours ago",
  },
];

export default function Candidates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && c.status === activeTab;
  });

  const getStatusColor = (status) => {
    if (status === "available") return "bg-green-100 text-green-700";
    if (status === "in-process") return "bg-yellow-100 text-yellow-700";
    if (status === "deployed") return "bg-blue-100 text-blue-700";
    return "bg-gray-200";
  };

  const getStatusIcon = (status) => {
    if (status === "available") return <CheckCircle2 size={14} />;
    if (status === "in-process") return <Clock size={14} />;
    if (status === "deployed") return <Briefcase size={14} />;
    return <AlertCircle size={14} />;
  };

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Candidates</h1>
          <p className="text-gray-500">
            Manage your talent pool
          </p>
        </div>

        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded">
          <UserPlus size={16} />
          Add Candidate
        </button>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            className="pl-10 border rounded w-full p-2"
            placeholder="Search by name, role, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="border px-4 rounded flex items-center gap-2">
          <Filter size={16} />
          Filters
        </button>
      </div>

{/* Tabs */}
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>

    <TabsTrigger value="all">All</TabsTrigger>

    <TabsTrigger value="available">Available</TabsTrigger>

    <TabsTrigger value="in-process">In Process</TabsTrigger>

    <TabsTrigger value="deployed">Deployed</TabsTrigger>

  </TabsList>
</Tabs>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {filteredCandidates.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="border rounded-lg p-5 hover:shadow-lg">

              {/* Header */}
              <div className="flex justify-between mb-3">
                <div className="flex gap-3">
                  <img
                    src={c.avatar}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-sm text-gray-500">{c.role}</p>
                  </div>
                </div>

                <button>
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${getStatusColor(
                    c.status
                  )}`}
                >
                  {getStatusIcon(c.status)}
                  {c.status}
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Star size={14} />
                  {c.rating}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div className="flex gap-2">
                  <MapPin size={14} /> {c.location}
                </div>
                <div className="flex gap-2">
                  <Briefcase size={14} /> {c.experience} years experience
                </div>
                <div className="flex gap-2">
                  <Calendar size={14} /> Active {c.lastActive}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {c.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
