const Assignment = require('../models/assignment.model');

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user._id }).populate('userId', 'name');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assignments', error });
  }
};

exports.updateAssignmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!['accepted', 'rejected'].includes(status))
      return res.status(400).json({ message: 'Invalid status' });

    const assignment = await Assignment.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: 'Assignment updated', assignment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating assignment', error });
  }
};
